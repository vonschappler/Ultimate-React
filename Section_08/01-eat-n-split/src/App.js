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

function Friend({ friend }) {
  return (
    <li>
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
          {friend.name} oew you ${Math.abs(friend.balance)}
        </p>
      )}
      <Button>Select</Button>
    </li>
  );
}

function FriendsList({ friends }) {
  return (
    <ul>
      {friends.map((friend) => (
        <Friend friend={friend} key={friend.id} />
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

function FormSplitbill() {
  return (
    <form className='form-split-bill'>
      <h2>Split a bill with Friend X</h2>
      <label>💵 Bill value: </label>
      <input type='text' />
      <label>💶 Your expense: </label>
      <input type='text' />
      <label>💷 X's expense: </label>
      <input type='text' disabled />
      <label>💷 Payer: </label>
      <select>
        <option value='user'>You</option>
        <option value='friend'>X</option>
      </select>
      <Button>Split bill</Button>
    </form>
  );
}

function App() {
  const [showAddFriend, setShowAddFriend] = useState(false);
  const [friends, setFriends] = useState(initialFriends);
  function handleShowAddFriend() {
    setShowAddFriend((currShowAddFriend) => !currShowAddFriend);
  }
  function handleAddFriends(friend) {
    setFriends((currFriends) => [...currFriends, friend]);
    setShowAddFriend(false);
  }
  return (
    <div className='app'>
      <div className='sidebar'>
        <FriendsList friends={friends} />
        {showAddFriend && (
          <FormAddFriend friends={friends} onAddFriend={handleAddFriends} />
        )}
        <Button onClick={handleShowAddFriend}>
          {showAddFriend ? 'Close' : 'Add Friend'}
        </Button>
      </div>
      <FormSplitbill />
    </div>
  );
}

export default App;
