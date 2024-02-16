function Reset({ onClick, className }) {
  return (
    <svg
      onClick={onClick}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
      className={className}
    >
      <path stroke="#000" strokeLinecap="round" strokeLinejoin="round" d="M16.516 9.348h4.5v-4.5"></path>
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17.834 17.834a8.25 8.25 0 110-11.668l3.182 3.182"
      ></path>
    </svg>
  );
}

export default Reset;
