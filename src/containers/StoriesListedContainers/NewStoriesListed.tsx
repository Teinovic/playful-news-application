import { StoriesListed } from "../../components/storyList"
import { HeaderComponent } from "../../components/Header"



export const NewStoriesListedContainer:React.FC  = () => {
    return (
      <>
        <HeaderComponent withNavBarProp={true} storiesUnderlined={true} playgroundColor={false} storyUnderlined={'newStories'}/>
        <StoriesListed storiesLinkProp="https://hacker-news.firebaseio.com/v0/newstories.json"/>
      </>
    )
}