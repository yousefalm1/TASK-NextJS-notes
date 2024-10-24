import NavLink from "./NavLink";

async function AuthButtons() {
  // Actually check if there's a user!
  const user = null

  if (user)
    return (<button
      type="button"
      // Actually make the logout button work!
      className="ml-2 px-2 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors"
    >
      Logout
    </button>)

  return (
    <>
      <NavLink href="/login">
        Login
      </NavLink>
      <NavLink href="/register">
        Register
      </NavLink>
    </>
  )
}

export default AuthButtons