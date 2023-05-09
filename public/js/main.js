
const idleDuration = 5 * 60 * 1000; // 5 minutes
let idleTimeout;

function logout() {
 
  console.log("Idle timeout reached. Logging out...");
}

function resetIdleTimeout() {
  clearTimeout(idleTimeout);
  idleTimeout = setTimeout(logout, idleDuration);
}

document.addEventListener("mousemove", resetIdleTimeout);
document.addEventListener("keydown", resetIdleTimeout);

resetIdleTimeout(); 
