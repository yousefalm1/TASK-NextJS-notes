import Image from 'next/image'

function UserCard({ user }) {
  return (
    <div
      className="bg-gray-700 p-6 rounded-md flex flex-col items-center justify-center"
    >
      <Image
        src={user.image}
        alt={user.name}
        width={96}
        height={96}
        className="w-24 h-24 rounded-full mb-4"
      />
      <div className="text-center">
        <h3 className="text-lg text-white font-semibold mb-2">
          {user.name}
        </h3>
        <p className="text-gray-300">{user.email}</p>
      </div>
    </div>
  )
}

export default UserCard