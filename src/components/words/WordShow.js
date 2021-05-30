import React from "react";
import { Table } from "reactstrap";

function WordShow({ lists, word }) {
  return (
    <div>
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>English Word</th>
            <th>English Sentence</th>
            <th>Turkish Word</th>
            <th>Turkish Sentence</th>
            <th>List Name</th>
          </tr>
        </thead>
        <tbody>
          <th scope="row">
            {console.log(word.id)}
            {word.id}
          </th>
          <td>{word.engWordName}</td>
          <td>{word.engSentence}</td>
          <td>{word.trWordName}</td>
          <td>{word.trSentence}</td>
          <td>
            {lists.map((list) =>
              list.id === word.listId ? list.listName : ""
            )}
          </td>
          <td></td>
        </tbody>
      </Table>
    </div>
  );
}

export default WordShow;
