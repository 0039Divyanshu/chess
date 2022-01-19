import postMethod from "../src/api";

const inputUsername = ({
  backendResponse,
  updateBackendResponse,
  userName,
  updateUserName,
  updateObj,
  obj,
}) => {
  const submitUsername = async (event) => {
    event.preventDefault();
    updateObj({
      ...obj,
      userName: userName,
    });
    updateUserName("");
    const response = await postMethod(backendResponse, userName,'/update-username');
    updateBackendResponse(response);
  };

  return (
    <form id="userNameForm" onSubmit={submitUsername}>
      <input
        placeholder="Type your Username..."
        value={userName}
        onChange={(event) => {
          updateUserName(event.target.value);
        }}
      />
      <button type="submit">Send</button>
    </form>
  );
};

export default inputUsername;
