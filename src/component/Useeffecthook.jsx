import { useEffect, useState } from "react";



export default function UseEffectApi() {

    
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [retryCount, setRetryCount] = useState(0);

  const API_URL = "https://jsonplaceholder.typicode.com/users";
  
  useEffect(() => {
    const controller = new AbortController();

    async function fetchUsers() {
      setIsLoading(true);
      setErrorMessage("");

      try {
        const response = await fetch(API_URL, {
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error(`Request failed (${response.status}). Please try again.`);
        }

        const data = await response.json();

        if (!Array.isArray(data)) {
          throw new Error("The API returned data in an unexpected format.");
        }

        setUsers(data);
      } catch (error) {
        if (error.name !== "AbortError") {
          setErrorMessage(error.message || "Could not load users. Please try again.");
        }
      } finally {
        if (!controller.signal.aborted) {
          setIsLoading(false);
        }
      }
    }

    fetchUsers();

    return () => controller.abort();
  }, [retryCount]);

  function handleRetry() {
    setRetryCount((currentCount) => currentCount + 1);
  }

  return (
    <main className="api-page">
      <section className="api-container">
        <header className="api-header">
          <p className="api-eyebrow">API Integration</p>
          <h1>User Directory</h1>
          <p>Users loaded from JSONPlaceholder.</p>
        </header>

        {isLoading && (
          <p className="api-message" role="status">
            Loading users…
          </p>
        )}

        {!isLoading && errorMessage && (
          <div className="api-error" role="alert">
            <p>{errorMessage}</p>
            <button className="retry-button" type="button" onClick={handleRetry}>
              Try Again
            </button>
          </div>
        )}

        {!isLoading && !errorMessage && (
          <>
            <p className="user-count" aria-live="polite">
              {users.length} users found
            </p>

            <div className="user-grid">
              {users.map((user) => {
                const websiteUrl = user.website.startsWith("http")
                  ? user.website
                  : `https://${user.website}`;

                return (
                  <article className="user-card" key={user.id}>
                    <div className="user-card-heading">
                      <span className="user-id">User {user.id}</span>
                      <h2>{user.name}</h2>
                      <p className="user-username">@{user.username}</p>
                    </div>

                    <dl className="user-details">
                      <div>
                        <dt>Email</dt>
                        <dd>
                          <a href={`mailto:${user.email}`}>{user.email}</a>
                        </dd>
                      </div>
                      <div>
                        <dt>Phone</dt>
                        <dd>
                          <a href={`tel:${user.phone}`}>{user.phone}</a>
                        </dd>
                      </div>
                      <div>
                        <dt>Website</dt>
                        <dd>
                          <a href={websiteUrl} target="_blank" rel="noreferrer">
                            {user.website}
                          </a>
                        </dd>
                      </div>
                    </dl>
                  </article>
                );
              })}
            </div>
          </>
        )}
      </section>
    </main>
  );
}