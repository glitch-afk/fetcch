type Props = {
  fill?: string;
  onClick?: any;
};

export function Swap(props: Props) {
  return (
    <svg
      onClick={props.onClick}
      width="18"
      height="14"
      viewBox="0 0 28 24"
      fill={props.fill ? props.fill : 'white'}
      xmlns="http://www.w3.org/2000/svg"
      className="animate-pulse"
    >
      <path
        d="M0.256 14.0002L28 14.0002C28 16.2092 26.209 18.0002 24 18.0002L11 18.0002L11 23.2862C11 23.9192 10.235 24.2352 9.788 23.7882L0.181 14.1812C0.114 14.1142 0.162 14.0002 0.256 14.0002ZM18.212 0.212194L27.812 9.81219C27.882 9.88219 27.832 10.0002 27.734 10.0002L-6.11844e-07 10.0002C-7.08403e-07 7.79119 1.791 6.00019 4 6.00019L17 6.00019L17 0.714195C17 0.0821945 17.765 -0.234807 18.212 0.212194Z"
        fill={props.fill ? props.fill : 'white'}
      />
    </svg>
  );
}
