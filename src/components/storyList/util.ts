export async function getComms(commsId, setCommentDataFn, setLoadingFn) {
    try { 
      setLoadingFn(true)
      const comments: any = []
      for (let comment of commsId) {
        const response = await fetch(`https://hacker-news.firebaseio.com/v0/item/${comment}.json`)
        if (response.ok === false) {
          throw new Error("Response Error:" + response.text)
        }
        const json = await response.json()

        json['childCommentsArray'] = []
        if (json.kids)
          for (let childComment of json.kids) {
            const response = await fetch(`https://hacker-news.firebaseio.com/v0/item/${childComment}.json`)
            if (response.ok === false) {
              throw new Error("Response Error:" + response.text)
            }
            const jsonKids = await response.json()
            json.childCommentsArray.push(jsonKids)
          }
        comments.push(json)          
      }
      setLoadingFn(false)
      setCommentDataFn(['bla', comments])
      
    } catch (err) {
      console.error(err)
    }
}


export async function getStories(cnt, fn, url, endOfResultsFn) {
    try {
      const response = await fetch(url);
      if (response.ok === false) {
        throw new Error("Response Error:" + response.text);
      }
      const json = await response.json();
      endOfResultsFn(json.length)
      const promises = json
        .slice(cnt[0], cnt[1])  
        .map((id: number) =>
          fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`).then(
            response => response.json()
          )
        );
      const result = await Promise.all(promises);
      // console.log(result, 'postsArr')
      fn(prevResult => [...prevResult, ...result]);
    } catch (err) {
      console.error(err);
    }
}