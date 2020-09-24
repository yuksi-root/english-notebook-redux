import React from "react";
import TextInput from "../toolbox/TextInput";
import SelectInput from "../toolbox/SelectInput";

const WordDetail = ({lists, word, onSave, onChange,errors}) => {
  return (
    <form onSubmit={onSave}>
      <h2>{word.id ? "Güncelle" : "Ekle"}</h2>
      <TextInput
        name="engWordName"
        label="Eng Word Name"
        value={word.engWordName}
        onChange={onChange}
        error={errors.engWordName}
      ></TextInput>
      <SelectInput
        name="listId"
        label="List"
        value={word.listId || ""}
        defaultOption="Liste Seçiniz"
        options={lists.map((list) => ({
          value: list.id,
          text: list.listName,
        }))}
        onChange={onChange}
        error={errors.listId}
      />
      <TextInput
        name="trWordName"
        label="Tr Word Name"
        value={word.trWordName}
        onChange={onChange}
        error={errors.trWordName} 
      ></TextInput>
      <TextInput
        name="engSentence"
        label="English Sentence "
        value={word.engSentence}
        onChange={onChange}
        error={errors.engSentence} 
      ></TextInput>
      <TextInput
        name="trSentence"
        label="Turkish Sentence"
        value={word.trSentence}
        onChange={onChange}
        error={errors.trSentence} 
      ></TextInput>
      <button type="submit" className="btn btn-success">
        Save
      </button>
    </form>
  );
};

export default WordDetail;
