package routes

import (
	"portfolio/handlers"

	"github.com/gin-gonic/gin"
)

func RegisterRoutes(r *gin.Engine) {
	api := r.Group("/api")
	{
		api.GET("/projects", handlers.GetProjects)
		api.POST("/contact", handlers.SubmitContact)
	}
}
