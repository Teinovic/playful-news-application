import { StoriesListed } from "../../components/storyList"
import { HeaderComponent } from "../../components/Header"

export const TopStoriesListedContainer: React.FC = () => {
  return (
    <>
      <HeaderComponent
        withNavBarProp={true}
        storiesUnderlined={true}
        playgroundColor={false}
        storyUnderlined={"topStories"}
      />
      <StoriesListed storiesLinkProp="https://hacker-news.firebaseio.com/v0/topstories.json" />
    </>
  )
}
