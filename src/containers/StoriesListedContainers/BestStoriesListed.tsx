import { StoriesListed } from "../../components/storyList"
import { HeaderComponent } from "../../components/Header"

export const BestStoriesListedContainer: React.FC = () => {
  return (
    <>
      <HeaderComponent
        withNavBarProp={true}
        storiesUnderlined={true}
        playgroundColor={false}
        storyUnderlined={"bestStories"}
      />
      <StoriesListed storiesLinkProp="https://hacker-news.firebaseio.com/v0/beststories.json" />
    </>
  )
}
