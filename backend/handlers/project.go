package handlers

import (
	"net/http"

	"portfolio/models"

	"github.com/gin-gonic/gin"
)

func GetProjects(c *gin.Context) {
	projects := []models.Project{
		{ID: 1, Title: "Payment API", Description: "High-performance API built with Go & Gin."},
		{ID: 2, Title: "Business Dashboard", Description: "React dashboard with role-based access."},
	}

	c.JSON(http.StatusOK, projects)
}
