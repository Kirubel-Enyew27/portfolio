package handlers

import (
	"fmt"
	"net/http"

	"portfolio/models"
	"portfolio/utils"

	"github.com/gin-gonic/gin"
)

func SubmitContact(c *gin.Context) {
	var contact models.Contact

	if err := c.ShouldBindJSON(&contact); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"error": "Invalid payload",
		})
		return
	}

	emailBody := `
New Contact Message from Portfolio

Name: ` + contact.Name + `
Email: ` + contact.Email + `

Message:
` + contact.Message

	err := utils.SendEmail(
		"📩 New Portfolio Contact Message",
		emailBody,
	)

	if err != nil {
		fmt.Println("Error Sending message:", err)
		c.JSON(http.StatusInternalServerError, gin.H{
			"error": "Failed to send email",
		})
		return
	}

	c.JSON(http.StatusOK, gin.H{
		"message": "Thank you for contacting me! I will get back to you soon.",
	})
}
