import {useState} from 'react'

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

function Button({onClick, children }) {
  return <button onClick={onClick} className='button'>{children}</button>;
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

function FriendsList() {
  const friends = initialFriends;
  return (
    <ul>
      {friends.map((friend) => (
        <Friend friend={friend} key={friend.id} />
      ))}
    </ul>
  );
}

function FormAddFriend() {
  return (
    <form className='form-add-friend'>
      <label>👥 Friend name: </label>
      <input type='text' />
      <label>📷 Image URL: </label>
      <input type='text' />
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
  const [showAddFriend, setShowAddFriend] = useState(false)
  function handleShowAddFriend() {
    setShowAddFriend(currShowAddFriend => !currShowAddFriend)
  }
  return (
    <div className='app'>
      <div className='sidebar'>
        <FriendsList />
        {showAddFriend &&<FormAddFriend />}
        <Button onClick={handleShowAddFriend}>{showAddFriend ? 'Close' : 'Add Friend'}</Button>
      </div>
      <FormSplitbill />
    </div>
  );
}

export default App;
