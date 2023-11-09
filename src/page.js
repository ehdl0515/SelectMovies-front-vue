import {GetMoviesAll} from './movie_api.js';

export async function GetTotalDataCnt() {
    const response = await GetMoviesAll();
    if (!response.ok) {
        throw new Error('Network Connect Fail!!: ' + response.status);
    }
    console.log(response)
    let totalDataCnt = await response.json();
    console.log("totalDataCnt: ", totalDataCnt)
    return totalDataCnt;
}



export function getTotalPageCount(totalDataCnt, DataCntPerPage) {
    return Math.ceil( totalDataCnt / DataCntPerPage);
}

export function getPageGroup(currentPage, showPageCnt) {
    return Math.ceil(currentPage / showPageCnt);
}

export function getFirstPage(pageGroup, showPageCnt) {
    return (pageGroup * showPageCnt) + 1;
}

export function getLastPage(pageGroup, showPageCnt, totalPage) {

    let result = pageGroup * showPageCnt;
    if (result >= totalPage) {
        result = totalPage;
    } else if (result < totalPage) {
        if ((totalPage - result) > showPageCnt) {
            result += showPageCnt;
        } else {
            result += (totalPage % showPageCnt)
        }
    }
    return result;
}



export async function setPaging(currentPage, showPageCnt, totalPage, condition=1) {

    // const totalPage = getTotalPageCount(93);
    const pageGroup = getPageGroup(currentPage, showPageCnt);

    let first = getFirstPage(pageGroup, showPageCnt);
    let last = getLastPage(pageGroup, showPageCnt, totalPage);

    const next = last + 1;
    const prev = first - 1;

    if (totalPage < 1) {
        first = last;
    }

    console.log("totalPage: ", totalPage)
    console.log("pageGroup: ", pageGroup)
    console.log("first: ", first)
    console.log("last: ", last)
    console.log("prev: ", prev)
    console.log("next: ", next)

    let newHtml = "";

    if (condition === 1) {
        for (let j = first; j <= last; j++) {
            if (j === first) {
                newHtml += `<span class="number-button active"> ${j} </span>`
            } else if (currentPage === j) {
                newHtml += `<span class="number-button"> ${j} </span>`
            } else if (j > 0 ) {
                newHtml += `<span class="number-button"> ${j} </span>`
            }
        }
    }
    else if (condition === 0) {
        for (let j = first; j <= last; j++) {
            if (j === last) {
                newHtml += `<span class="number-button active"> ${j} </span>`
            } else if (currentPage === j) {
                newHtml += `<span class="number-button"> ${j} </span>`
            } else if (j > 0 ) {
                newHtml += `<span class="number-button"> ${j} </span>`
            }
        }

    }
    console.log(newHtml)
    return [newHtml, last];
}





