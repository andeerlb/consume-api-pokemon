export default function Photo ({ photoUrl }) {
    return (
      <div className='photoContainer'>
        <img src={photoUrl} />
      </div>
    )
  }