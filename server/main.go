package main

import (
	"alice/server/controllers"
	"alice/server/services"
	"net/http"

	"github.com/gorilla/mux"
)

func main() {
	ss, err := services.ConnectSlack("TOKEN")
	if err != nil {
		panic(err)
	}
	alice := controllers.NewAlice(ss)
	r := mux.NewRouter()
	r.HandleFunc("/employees", alice.GetAllUsers).Methods("GET")
	http.ListenAndServe(":5000", r)
}
