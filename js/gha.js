//include script on every page, where you want to have module
GitHubActivity.feed({
  username: "diglabby",
  /*handler: "github-activity/handler.php",
  repositories: {
  	"MrKarlKori": "MrKarlKori",
  	"diglabby": "diglabby",
  	"fr0zen": "fr0zen",
  },*/
  selector: "#feed",
  limit: 20
});