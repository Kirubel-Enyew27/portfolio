package utils

import (
	"fmt"
	"os"

	"github.com/sendgrid/sendgrid-go"
	"github.com/sendgrid/sendgrid-go/helpers/mail"
)

// func SendEmail(subject, body string) error {
// 	from := os.Getenv("SMTP_EMAIL")
// 	password := os.Getenv("SMTP_PASSWORD")
// 	host := os.Getenv("SMTP_HOST")
// 	port := os.Getenv("SMTP_PORT")

// 	auth := smtp.PlainAuth("", from, password, host)

// 	msg := []byte(
// 		"From: " + from + "\r\n" +
// 			"To: " + from + "\r\n" +
// 			"Subject: " + subject + "\r\n" +
// 			"MIME-version: 1.0;\r\n" +
// 			"Content-Type: text/plain; charset=\"UTF-8\";\r\n\r\n" +
// 			body,
// 	)

// 	return smtp.SendMail(
// 		fmt.Sprintf("%s:%s", host, port),
// 		auth,
// 		from,
// 		[]string{from},
// 		msg,
// 	)
// }

func SendEmail(email, subject, body string) error {
	from := mail.NewEmail("Portfolio", email)
	to := mail.NewEmail("You", "kirubelenyew76@gmail.com")
	message := mail.NewSingleEmail(from, subject, to, body, body)
	client := sendgrid.NewSendClient(os.Getenv("SENDGRID_API_KEY"))
	_, err := client.Send(message)
	if err != nil {
		fmt.Println("Errror###", err)
	}
	return err
}
