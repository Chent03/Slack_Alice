package services

import (
	"fmt"
	"log"

	"github.com/nlopes/slack"
)

type SlackService struct {
	slack *slack.Client
}

type Employee struct {
	ID        string
	FirstName string
	LastName  string
	Email     string
	Image     string
}

type Vistor struct {
	FirstName      string `json:"firstName"`
	LastName       string `json:"lastName"`
	MeetingEmpName string `json:"empName"`
	MeetingEmpID   string `json:"empID"`
}

// ConnectSlack takens in a token and connects to the Slack API
func ConnectSlack(token string) (*SlackService, error) {
	api := slack.New(token)
	_, err := api.AuthTest()
	if err != nil {
		return nil, err
	}
	return &SlackService{
		slack: api,
	}, nil
}

// GetAllUsers returns all employees that are in slack
func (ss *SlackService) GetAllUsers() ([]Employee, error) {
	e := []Employee{}
	users, err := ss.slack.GetUsers()
	if err != nil {
		return nil, err
	}
	for _, user := range users {
		e = append(e, Employee{
			ID:        user.ID,
			FirstName: user.Profile.FirstName,
			LastName:  user.Profile.LastName,
			Email:     user.Profile.Email,
			Image:     user.Profile.Image24,
		})
	}
	return e, nil
}

// PostMessage sends message to Slack User
func (ss *SlackService) PostMessage(v Vistor) error {
	message := fmt.Sprintf("Hi %s, %s %s is here for you at the front desk.", v.MeetingEmpName, v.FirstName, v.LastName)

	_, _, err := ss.slack.PostMessage(v.MeetingEmpID, slack.MsgOptionText(message, false))
	if err != nil {
		log.Println(err)
	}
	return nil
}
