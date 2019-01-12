package controllers

import (
	"alice/server/services"
	"encoding/json"
	"io/ioutil"
	"log"
	"net/http"
)

type Alice struct {
	ss *services.SlackService
}

type serverReply struct {
	Success bool   `json:"success"`
	Message string `json:"message"`
}

// NewAlice creates a new alice controller
func NewAlice(ss *services.SlackService) *Alice {
	return &Alice{
		ss: ss,
	}
}

// GetAllUsers is used to send back all the users via http request
func (a *Alice) GetAllUsers(w http.ResponseWriter, r *http.Request) {
	users, err := a.ss.GetAllUsers()
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
	}
	jsonRespond(w, r, http.StatusOK, users)
}

// PostToUser sends a message to user
func (a *Alice) PostToUser(w http.ResponseWriter, r *http.Request) {
	v := services.Vistor{}
	body, err := ioutil.ReadAll(r.Body)
	defer r.Body.Close()
	if err != nil {
		log.Panic("Couldn't read incoming JSON")
	}
	if err = json.Unmarshal(body, &v); err != nil {
		log.Panic("Error in parsing json")
	}
	if err := a.ss.PostMessage(v); err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
	}

	reply := serverReply{
		Success: true,
		Message: "Success",
	}
	jsonRespond(w, r, http.StatusOK, reply)
}

func jsonRespond(w http.ResponseWriter, r *http.Request, statusCode int, payload interface{}) {
	res, err := json.MarshalIndent(payload, "", " ")
	if err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		w.Write([]byte("Internal Server Error"))
	}
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(statusCode)
	w.Write(res)
}
