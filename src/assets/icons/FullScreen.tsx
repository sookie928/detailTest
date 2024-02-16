function FullScreen({ onClick, className }) {
  return (
    <svg onClick={onClick} width="24" height="24" fill="none" viewBox="0 0 24 24" className={className}>
      <rect width="20" height="18" x="2" y="3" stroke="#000" rx="2"></rect>
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8 6H5v3M5 15v3h3M19 9V6h-3M16 18h3v-3"
      ></path>
    </svg>
  );
}

export default FullScreen;
