import "./Dashboard.css";
import Button from "@material-ui/core/Button";
import RecipeCard from "../RecipeCard/RecipeCard";

export default function DashboardProfile({ user }) {
  return (
    <div class="main_card">
      <div className="profile">
        <div className="bio">
          <div className="bionibaju">
            <div className="photobox">
              <img src="https://seventhqueen.com/themes/kleo/wp-content/uploads/rtMedia/users/44269/2020/07/dummy-profile.png"></img>
            </div>
            <h1>{user.user.name}</h1>
            <span className="bioicon">
              <Button variant="outlined" color='primary'>{user.user.following.length} following</Button>
            </span>
            <span className="bioicon">
              <Button variant="contained" color='primary'>{user.user.followers.length} followers</Button>
            </span>
          </div>
        </div>
      </div>



      <div className="content-center-dashboard">
        <div className="biobottom">
          <div>
            <h1>Uploaded Recipes</h1>
            {user.uploaded.length !== 0
              &&
              user.uploaded.map(r => <RecipeCard r={r} />)
            }
          </div>
          <div>
            <h1>Liked Recipes</h1>
            {user.liked.length !== 0 && user.liked[0] !== null &&
              user.liked.map(r => <RecipeCard r={r} />)
            }
          </div>
          <div>
            <h1>Saved Recipes</h1>
            {user.saved.length !== 0 && user.saved[0] !== null
              &&
              user.saved.map(r => <RecipeCard r={r} />)
            }
          </div>
        </div>
      </div>
    </div>
  );
}

