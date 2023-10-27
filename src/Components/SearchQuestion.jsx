import React, { useState, useEffect } from 'react';
import { db } from '../firebase';
import {
  collection,
  addDoc,
  getDocs,
  query,
  where,
  orderBy,
} from 'firebase/firestore';
import { deleteDoc, doc } from 'firebase/firestore';
import '../CSS/SearchQuestion.css';
import { Controlled as CodeMirror } from 'react-codemirror2';

function FindQuestion() {
  const [cards, setCards] = useState([]);
  const [filterTitle, setFilterTitle] = useState('');
  const [filterTag, setFilterTag] = useState('');
  const [filterDate, setFilterDate] = useState('');
  const [newCard, setNewCard] = useState({
    title: '',
    tag: '',
    code: '', 
    date: '', 
  });
  const [expandedIndex, setExpandedIndex] = useState(null);

  const cardsRef = collection(db, 'cards');
  const [filteredCards, setFilteredCards] = useState([]);

  useEffect(() => {
    const getCards = async () => {
      const q = query(
        cardsRef,
        orderBy('date', 'desc')
      );
      const data = await getDocs(q);
      const cardData = data.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setCards(cardData);
      setFilteredCards(cardData);
    };
    getCards();
  }, []);

  const handleFilter = () => {
    const filteredCards = cards.filter(
      (card) =>
        card.title.toLowerCase().includes(filterTitle.toLowerCase()) &&
        card.tag.toLowerCase().includes(filterTag.toLowerCase()) &&
        (filterDate === '' || card.date.includes(filterDate))
    );
    setFilteredCards(filteredCards);
  };

  const handleDeleteCard = async (id) => {
    await deleteDoc(doc(db, 'cards', id));
    const updatedCards = filteredCards.filter((card) => card.id !== id);
    setFilteredCards(updatedCards);
  };

  const handleSubmitNewCard = async () => {
    const newCardWithDate = {
      ...newCard,
      date: new Date().toLocaleString(),
    };
    await addDoc(cardsRef, newCardWithDate);
    // Update both the filteredCards and cards state
    setFilteredCards([newCardWithDate, ...filteredCards]);
    setCards([newCardWithDate, ...cards]);
    setNewCard({ title: '', tag: '', code: '', date: '' });
  };

  const handleExpand = (index) => {
    setExpandedIndex(index === expandedIndex ? null : index);
  };

  return (
    <div>
      <h1>Filter Cards</h1>
      <div className="filter">
        <h5>Title:</h5>
        <input
          type="text"
          placeholder="Filter by title"
          value={filterTitle}
          onChange={(e) => setFilterTitle(e.target.value)}
        />

        <h5>Tag:</h5>
        <input
          type="text"
          placeholder="Filter by tag"
          value={filterTag}
          onChange={(e) => setFilterTag(e.target.value)}
        />

        <h5>Date:</h5>
        <input
          type="text"
          placeholder="Filter by date"
          value={filterDate}
          onChange={(e) => setFilterDate(e.target.value)}
        />

        <button onClick={handleFilter}>Filter</button>
      </div>

      <h1>Add New Card</h1>
      <div className="newCard">
        <h5>Title:</h5>
        <input
          type="text"
          placeholder="Title"
          value={newCard.title}
          onChange={(e) =>
            setNewCard({ ...newCard, title: e.target.value })
          }
        />
        <h5>Code:</h5>
        <div className="code-container">
          <CodeMirror
            value={newCard.code}
            options={{
              mode: 'javascript',
              theme: 'material',
            }}
            onBeforeChange={(editor, data, value) =>
              setNewCard({ ...newCard, code: value })
            }
          />
        </div>
        <h5>Tag:</h5>
        <input
          type="text"
          placeholder="Tag"
          value={newCard.tag}
          onChange={(e) =>
            setNewCard({ ...newCard, tag: e.target.value })
          }
        />
        <button onClick={handleSubmitNewCard}>Submit</button>
      </div>

      <h1>Cards</h1>
      {filteredCards.map((card, index) => (
        <div className="card" key={card.id}>
          <h2>Card: {index + 1}</h2>
          <h2>Title: {card.title}</h2>
          <button onClick={() => handleDeleteCard(card.id)}>Delete</button>
          <button onClick={() => handleExpand(index)}>
            {expandedIndex === index ? 'Collapse' : 'Expand'}
          </button>
          {expandedIndex === index && (
            <div>
              <h3>More Details:</h3>
              <p>Code:</p>
              <div className="code-container">
                <CodeMirror
                  value={card.code}
                  options={{
                    mode: 'javascript',
                    theme: 'material',
                    readOnly: true, 
                  }}
                />
              </div>
              <p>Tag: {card.tag}</p>
              <p>Date: {card.date}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default FindQuestion;





