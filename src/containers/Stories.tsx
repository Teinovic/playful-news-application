import { Stories } from "../components/Stories/index"
import { HeaderComponent } from "../components/Header"

export function StoriesContainer() {
  return (
    <>
      <HeaderComponent
        withNavBarProp={false}
        storiesUnderlined={true}
        playgroundColor={false}
        storyUnderlined={""}
      />
      <Stories />
    </>
  )
}
