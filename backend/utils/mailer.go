package utils

import (
	"fmt"
	"net/smtp"
	"os"
)

func SendEmail(subject, body string) error {
	from := os.Getenv("SMTP_EMAIL")
	password := os.Getenv("SMTP_PASSWORD")
	host := os.Getenv("SMTP_HOST")
	port := os.Getenv("SMTP_PORT")

	auth := smtp.PlainAuth("", from, password, host)

	msg := []byte(
		"From: " + from + "\r\n" +
			"To: " + from + "\r\n" +
			"Subject: " + subject + "\r\n" +
			"MIME-version: 1.0;\r\n" +
			"Content-Type: text/plain; charset=\"UTF-8\";\r\n\r\n" +
			body,
	)

	return smtp.SendMail(
		fmt.Sprintf("%s:%s", host, port),
		auth,
		from,
		[]string{from},
		msg,
	)
}
