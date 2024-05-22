import { faCircle, faCircleCheck } from "@fortawesome/free-regular-svg-icons";
import { faSearch, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { members } from "../constants/members";

const ADDED_MEMBER_COLOR = "green";
const NOT_MEMBER_COLOR = "#ccc";

function Members() {
  return (
    <div className="members-paper">
      <header className="members-header">
        <h3>Add members to Front-end development team</h3>
      </header>
      <main className="members-container">
        <div className="search-container">
          <FontAwesomeIcon className="icon" icon={faSearch} />
          <input
            className="search-input"
            name="search"
            type="text"
            placeholder="Find members"
          />
        </div>
        <ul className="members-list">
          {members.map((member, index) => (
            <li key={index} className="member-list-item">
              <span style={{ color: !member.isAdded && NOT_MEMBER_COLOR }}>
                <FontAwesomeIcon className="icon" icon={faUser} />
                {member.name}
              </span>
              <FontAwesomeIcon
                className="icon"
                icon={member.isAdded ? faCircleCheck : faCircle}
                color={member.isAdded ? ADDED_MEMBER_COLOR : NOT_MEMBER_COLOR}
                size="lg"
              />
            </li>
          ))}
        </ul>
        <div className="member-actions">
          <button className="btn cancel-btn">Cancel</button>
          <button className="btn save-btn">Save</button>
        </div>
      </main>
    </div>
  );
}

export default Members;
