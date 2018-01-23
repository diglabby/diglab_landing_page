//include script on every page, where you want to have module
GitHubActivity.feed({
  username: "diglabby",
  handler: "github-activity/handler.php",
  repositories: {
  	"falanster": "falanster"
  },
  selector: "#feed",
  limit: 20
});