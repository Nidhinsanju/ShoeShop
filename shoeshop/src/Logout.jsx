function Logout() {
  return (
    <div>
      <button
        onClick={() => {
          localStorage.setItem("token", null);
          localStorage.setItem("CustomerID", null);
        }}
      >
        Log out
      </button>
    </div>
  );
}
export default Logout;
