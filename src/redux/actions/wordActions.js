import * as actionTypes from "./actionTypes";

export function getWordsSuccess(words) {
  return { type: actionTypes.GET_WORDS_SUCCESS, payload: words };
}

export function createWordSuccess(word) {
  return { type: actionTypes.CREATE_WORD_SUCCESS, payload: word };
}
export function updateWordSuccess(word) {
  return { type: actionTypes.UPDATE_WORD_SUCCESS, payload: word };
}
export function deleteWordSuccess(word) {
  return { type: actionTypes.DELETE_WORD_SUCCESS, payload: word };
}

export function saveWordApi(word) {
  //PUT EKLEME id varsa POST GÜNCELLEME
  return fetch("http://localhost:3000/words/" + (word.id || ""), {
    method: word.id ? "PUT" : "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(word), //göndereceğimiz data yeri
  })
    .then(handleResponse)
    .catch(handleError);
}
export function deleteWordApi(word) {
  return fetch("http://localhost:3000/words" + word.id, {
    method: "DELETE",
  })
    .then(handleResponse)
    .catch(handleError);
}

export function deleteWord(word) {
  return function (dispatch) {
    return saveWordApi(word)
      .then((savedWord) => {
        word.id = dispatch(deleteWordSuccess(savedWord))
      })
      .catch((error) => {
        throw error;
      });
  };
}
export function saveWord(word) {
  return function (dispatch) {
    return saveWordApi(word)
      .then((savedWord) => {
        word.id
          ? dispatch(updateWordSuccess(savedWord))
          : dispatch(createWordSuccess(savedWord));
      })
      .catch((error) => {
        throw error;
      });
  };
}

export async function handleResponse(response) {
  if (response.ok) {
    return response.json();
  }

  const error = await response.text();
  throw new Error(error);
}

export function handleError(error) {
  console.error("Bir hata oluştu");
  throw error;
}

export function getWords(listId) {
  return function (dispatch) {
    let url = "http://localhost:3000/words";
    if (listId) {
      //filtreleme
      url = url + "?listId=" + listId;
    }
    return fetch(url)
      .then((response) => response.json())
      .then((result) => dispatch(getWordsSuccess(result)));
  };
}
