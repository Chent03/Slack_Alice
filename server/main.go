package main

import (
	"alice/server/controllers"
	"alice/server/services"
	"log"
	"net/http"
	"os"

	"github.com/gorilla/mux"
	"github.com/joho/godotenv"
)

// LoadConfig checks if environemnt is PROD, if not then load in config file
func LoadConfig() {
	_, prod := os.LookupEnv("PROD")
	if !prod {
		err := godotenv.Load("config.env")
		if err != nil {
			log.Fatal("Error loading .env file")
		}
	}
}

func main() {
	LoadConfig()
	ss, err := services.ConnectSlack(os.Getenv("SLACK_TOKEN"))
	if err != nil {
		panic(err)
	}
	alice := controllers.NewAlice(ss)
	r := mux.NewRouter()
	r.HandleFunc("/api/employees", alice.GetAllUsers).Methods("GET")
	r.HandleFunc("/api/employees", alice.PostToUser).Methods("POST")
	http.ListenAndServe(":5000", r)
}
