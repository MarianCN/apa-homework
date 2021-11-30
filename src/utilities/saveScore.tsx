export const saveScore = (game: string, payload: any) => {
    const scores = localStorage.getItem('scores');

    if (!scores) {

          const scores = {
              games: {
                  [game]: {
                      history: [
                          payload
                      ]
                  }
              }
          }

          localStorage.setItem('scores', JSON.stringify(scores))
    } else {

        const scoreObject = JSON.parse(scores)
        const newScore = {
            ...scoreObject,
            games: {
                [game]: {
                    history: [
                        ...scoreObject.games[game].history,
                        payload
                    ]
                }
            }
        }

        localStorage.setItem('scores', JSON.stringify(newScore))
    }
}