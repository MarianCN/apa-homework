import {getFromLocalStorage} from "../../../utils/gameData/localStorage"
import {GamesData} from "../../../utils/gameData/types"

export const StatsPage = () => {

    const data = getFromLocalStorage('g-data') as GamesData

    const numbersHistory = data?.games?.numbers?.history ?? []
    const colorsHistory = data?.games?.colors?.history ?? []

    const numbersBestTime = Math.min(...numbersHistory.map((item) => {
        return item?.time;
    }) ?? []) / 1000

    const numbersAverageTime = numbersHistory.reduce((acc, a) => {
        return acc + a.time
    }, 0) / 1000 / numbersHistory.length

    const numbersAverageWA = numbersHistory.reduce((acc, a) => {
        return acc + a.clicks
    }, 0) / numbersHistory.length

    const colorsAverageRA = colorsHistory.reduce((acc, a) => {
        return acc + a.rightAnswers
    }, 0) / numbersHistory.length

    const colorsAverageWA = colorsHistory.reduce((acc, a) => {
        return acc + a.wrongAnswers
    }, 0) / numbersHistory.length

    return (
        <div className="page page-stats">
            <span className="page-title">STATISTICI</span>
            <div className={'statistics'}>
                <div className={'game-block'}>
                    <h3 className={'game-title'}>Numbers</h3>
                    <div className={'history-block'}>
                        Cel mai bun timp:&nbsp;<b>{numbersBestTime}s</b>
                    </div>
                    <div className={'history-block'}>
                        Timpul mediu:&nbsp;<b>{numbersAverageTime}s</b>
                    </div>
                    <div className={'history-block'}>
                        Numărul mediu de greșeli:&nbsp;<b>{numbersAverageWA}</b>
                    </div>
                </div>
                <div className={'game-block'}>
                    <h3 className={'game-title'}>Colors</h3>
                    <div className={'history-block'}>
                        Numărul mediu de răspunsuri corecte:&nbsp;<b>{colorsAverageRA}</b>
                    </div>
                    <div className={'history-block'}>
                        Numărul mediu de greșeli:&nbsp;<b>{colorsAverageWA}</b>
                    </div>
                </div>
            </div>
        </div>
    );
};
