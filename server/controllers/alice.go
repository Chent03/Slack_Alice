package controllers

import (
	"alice/server/services"
	"fmt"
	"net/http"

	"github.com/davecgh/go-spew/spew"
)

type Alice struct {
	ss *services.SlackService
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
	spew.Dump(users)
	fmt.Fprintln(w, users)
}
