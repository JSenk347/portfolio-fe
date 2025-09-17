export default function Footer() {
  return (
    <footer style={{
      padding: '1rem',
      background: 'white',
      textAlign: 'center',
      fontSize: '0.9rem',
      color: '#444',
      borderTop: '1px solid #eee'
    }}>
      <p>© 2025 All Rights Reserved.</p>
      <nav>
        <a href="#navbar" style={{margin: '0 8px'}}>Profile</a>
        <a href="#about" style={{margin: '0 8px'}}>About</a>
        <a href="#projects" style={{margin: '0 8px'}}>Projects</a>
      </nav>
    </footer>
  );
}