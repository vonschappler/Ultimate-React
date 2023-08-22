import { useState } from 'react';

const initialFriends = [
  {
    id: 118836,
    name: 'Clark',
    image: 'https://i.pravatar.cc/48?u=118836',
    balance: -7,
  },
  {
    id: 933372,
    name: 'Sarah',
    image: 'https://i.pravatar.cc/48?u=933372',
    balance: 20,
  },
  {
    id: 499476,
    name: 'Anthony',
    image: 'https://i.pravatar.cc/48?u=499476',
    balance: 0,
  },
];

function Button({ onClick, children }) {
  return (
    <button onClick={onClick} className='button'>
      {children}
    </button>
  );
}

function Friend({ friend, onSelectFriend, selectedFriend }) {
  const isSelected = selectedFriend?.id === friend.id;
  console.log(isSelected);
  return (
    <li className={isSelected ? 'selected' : ''}>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>
      {friend.balance < 0 && (
        <p className='red'>
          You owe {friend.name} ${Math.abs(friend.balance)}
        </p>
      )}
      {friend.balance === 0 && <p>You and {friend.name} are even</p>}
      {friend.balance > 0 && (
        <p className='green'>
          {friend.name} owe you ${Math.abs(friend.balance)}
        </p>
      )}
      <Button onClick={() => onSelectFriend(friend)}>
        {isSelected ? 'Close' : 'Select'}
      </Button>
    </li>
  );
}

function FriendsList({ friends, onSelectFriend, selectedFriend }) {
  console.log(selectedFriend);
  return (
    <ul>
      {friends.map((friend) => (
        <Friend
          friend={friend}
          key={friend.id}
          onSelectFriend={onSelectFriend}
          selectedFriend={selectedFriend}
        />
      ))}
    </ul>
  );
}

function FormAddFriend({ onAddFriend }) {
  const [newFriendName, setNewFriendName] = useState('');
  const [newFriendImage, setNewFriendImage] = useState(
    'https://i.pravatar.cc/48'
  );

  function handleSubmit(evt) {
    evt.preventDefault();
    const id = crypto.randomUUID();
    const newFriend = {
      id,
      name: newFriendName,
      image: `${newFriendImage}?=${id}`,
      balance: 0,
    };

    if (!newFriendName || !newFriendImage) {
      return;
    }

    setNewFriendName('');
    setNewFriendImage('https://i.pravatar.cc/48');
    console.log(newFriend);

    onAddFriend(newFriend);
  }

  return (
    <form className='form-add-friend' onSubmit={handleSubmit}>
      <label>👥 Friend name: </label>
      <input
        type='text'
        value={newFriendName}
        onChange={(evt) => setNewFriendName(evt.target.value)}
      />
      <label>📷 Image URL: </label>
      <input
        type='text'
        value={newFriendImage}
        onChange={(evt) => setNewFriendImage(evt.target.value)}
      />
      <Button>Add</Button>
    </form>
  );
}

function FormSplitbill({ selectedFriend, onSplitBill }) {
  const [bill, setBill] = useState('');
  const [myExpense, setMyExpense] = useState('');
  const friendExpense = bill ? bill - myExpense : '';
  const [payer, setPayer] = useState('user');
  function handleSubmit(evt) {
    evt.preventDefault();
    if (!bill || !myExpense) {
      return;
    }
    onSplitBill(payer === 'user' ? friendExpense : -myExpense);
  }
  return (
    <form className='form-split-bill' onSubmit={handleSubmit}>
      <h2>Split a bill with {selectedFriend.name}</h2>
      <label>💵 Bill value: </label>
      <input
        type='text'
        value={bill}
        onChange={(evt) => setBill(Number(evt.target.value))}
      />
      <label>💶 Your expense: </label>
      <input
        type='text'
        value={myExpense}
        onChange={(evt) =>
          setMyExpense(
            Number(evt.target.value) > bill
              ? myExpense
              : Number(evt.target.value)
          )
        }
      />
      <label>💷 {selectedFriend.name}'s expense: </label>
      <input type='text' value={friendExpense} disabled />
      <label>💴 Payer: </label>
      <select value={payer} onChange={(evt) => setPayer(evt.target.value)}>
        <option value='user'>You</option>
        <option value='friend'>{selectedFriend.name}</option>
      </select>
      <Button>Split bill</Button>
    </form>
  );
}

function App() {
  const [showAddFriend, setShowAddFriend] = useState(false);
  const [friends, setFriends] = useState(initialFriends);
  const [selectedFriend, setSelectedFriend] = useState(null);
  function handleShowAddFriend() {
    setShowAddFriend((currShowAddFriend) => !currShowAddFriend);
  }
  function handleAddFriends(friend) {
    setFriends((currFriends) => [...currFriends, friend]);
    setShowAddFriend(false);
  }
  function handSelectFriend(friend) {
    setSelectedFriend((curr) => (curr?.id === friend.id ? null : friend));
    setShowAddFriend(false);
  }
  function handleSplitBill(value) {
    setFriends((friends) =>
      friends.map((friend) =>
        friend.id === selectedFriend.id
          ? { ...friend, balance: friend.balance + value }
          : friend
      )
    );
    setSelectedFriend(null);
  }
  return (
    <div className='app'>
      <div className='sidebar'>
        <FriendsList
          friends={friends}
          onSelectFriend={handSelectFriend}
          selectedFriend={selectedFriend}
        />
        {showAddFriend && (
          <FormAddFriend friends={friends} onAddFriend={handleAddFriends} />
        )}
        <Button onClick={handleShowAddFriend}>
          {showAddFriend ? 'Close' : 'Add Friend'}
        </Button>
      </div>
      {selectedFriend && (
        <FormSplitbill
          selectedFriend={selectedFriend}
          onSplitBill={handleSplitBill}
        />
      )}
    </div>
  );
}

export default App;
