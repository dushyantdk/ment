import React from 'react';

const LockSvg = ({ lockActive }) => {
  const translate = [
    [-228, -4],
    [-228, -30],
    [-213, -72],
    [-180, -111],
    [-130, -132],
    [-75, -125],
    [-33, -100],
    [-4, -56],
    [2, 0],
  ];

  const lineFill = [440, 480, 530, 580, 630, 690, 740, 790, 840];

  return (
    <svg
      id="svg_lock"
      class="antifraud__lock"
      width="314"
      height="390"
      viewBox="0 0 314 371"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#fil1)">
        <path
          d="M263.764 138.403V138.554V138.705V138.857V139.01V139.164V139.319V139.475V139.632V139.789V139.948V140.107V140.267V140.428V140.59V140.753V140.916V141.08V141.246V141.412V141.578V141.746V141.914V142.084V142.254V142.424V142.596V142.768V142.941V143.115V143.29V143.466V143.642V143.819V143.996V144.175V144.354V144.534V144.715V144.896V145.078V145.261V145.445V145.629V145.814V146V146.186V146.373V146.561V146.749V146.938V147.128V147.319V147.51V147.702V147.894V148.087V148.281V148.475V148.67V148.866V149.062V149.259V149.456V149.654V149.853V150.052V150.252V150.453V150.654V150.855V151.058V151.26V151.464V151.668V151.872V152.077V152.283V152.489V152.696V152.903V153.111V153.319V153.528V153.737V153.947V154.157V154.368V154.579V154.791V155.004V155.216V155.43V155.643V155.858V156.072V156.287V156.503V156.719V156.936V157.153V157.37V157.588V157.806V158.025V158.244V158.463V158.683V158.903V159.124V159.345V159.567V159.789V160.011V160.234V160.457V160.68V160.904V161.128V161.352V161.577V161.802V162.028V162.254V162.48V162.706V162.933V163.16V163.387V163.615V163.843V164.072V164.3V164.529V164.758V164.988V165.217V165.448V165.678V165.908V166.139V166.37V166.601V166.833V167.065V167.297V167.529V167.761V167.994V168.227V168.46V168.693V168.927V169.16V169.394V169.628V169.863V170.097V170.332V170.566V170.801V171.036V171.271V171.507V171.742V171.978V172.214V172.45V172.686V172.922V173.158V173.394V173.631V173.867V174.104V174.341V174.578V174.815V175.052V175.289V175.526V175.763V176V176.238V176.475V176.712V176.95V177.187V177.425V177.662V177.9V178.137V178.375V178.613V178.85V179.088V179.325V179.563V179.801V180.038V180.276V180.513V180.75V180.988V181.225V181.463V181.7V181.937V182.174V182.411V182.648V182.885V183.122V183.359V183.595V183.832V184.068V184.305V184.541V184.777V185.013V185.249V185.485V185.72V185.956V186.191V186.426V186.661V186.896V187.131V187.365V187.6V187.834V188.068V188.302V188.535V188.769V189.002V189.235V189.468V189.701V189.933V190.165V190.397V190.629V190.86V191.092V191.323V191.553V191.784V192.014V192.244V192.474V192.703V192.932V193.161V193.39V193.618V193.846V194.074V194.301V194.528V194.755V194.981V195.207V195.433V195.659V195.884V196.108V196.333V196.557V196.781V197.004V197.227V197.449V197.672V197.893V198.115V198.336V198.557V198.777V198.997V199.216V199.435V199.654V199.872V200.09V200.307V200.524V200.74V200.956V201.172V201.387V201.601V201.816V202.029V202.242V202.455V202.667V202.879V203.09V203.301V203.511V203.721V203.93V204.139V204.347V204.555V204.762V204.969V205.175V205.38V205.585V205.79V205.993V206.197V206.399V206.601V206.803V207.004V207.204V207.404V207.603V207.802V208V208.197V208.394V208.59V208.786V208.981V209.175V209.368V209.561V209.754V209.945V210.136V210.327V210.516V210.705V210.894V211.081V211.268V211.454V211.64V211.825V212.009V212.193V212.375V212.557V212.739V212.919V213.099V213.278V213.456V213.634V213.811V213.987V214.162V214.337V214.511V214.684V214.856V215.027V215.198V215.368V215.537V215.705V215.873V216.039V216.205V216.37V216.534V216.698V216.86V217.022V217.183V217.343V217.502V217.66V217.818V217.974V218.13V218.285V218.438V218.591V218.744V218.895V219.045V219.195V219.343V219.491V219.637V219.783V219.928V220.072V220.215V220.357V220.498V220.638V220.777V220.915V221.052V221.189V221.324V221.458V221.591V221.724V221.855V221.985V222.002C262.061 222.56 260.07 223.206 257.833 223.921C249.955 226.435 239.052 229.785 226.942 233.131C202.331 239.933 174.068 246.332 155.836 246.332C139.595 246.332 111.59 238.858 86.4011 230.759C74.0791 226.797 62.8557 222.83 54.7088 219.852C52.1017 218.898 49.8126 218.048 47.907 217.332V217.288V217.168V217.048V216.926V216.804V216.681V216.557V216.432V216.306V216.18V216.052V215.924V215.795V215.665V215.534V215.402V215.27V215.136V215.002V214.867V214.731V214.595V214.457V214.319V214.18V214.04V213.9V213.758V213.616V213.473V213.329V213.185V213.039V212.893V212.747V212.599V212.451V212.302V212.152V212.001V211.85V211.698V211.545V211.391V211.237V211.082V210.927V210.77V210.613V210.455V210.297V210.138V209.978V209.817V209.656V209.494V209.331V209.168V209.004V208.839V208.674V208.508V208.341V208.174V208.006V207.837V207.668V207.498V207.328V207.157V206.985V206.812V206.639V206.466V206.292V206.117V205.941V205.765V205.589V205.411V205.234V205.055V204.876V204.697V204.516V204.336V204.154V203.973V203.79V203.607V203.424V203.24V203.055V202.87V202.684V202.498V202.311V202.124V201.936V201.748V201.559V201.37V201.18V200.99V200.799V200.608V200.416V200.223V200.031V199.837V199.644V199.449V199.255V199.06V198.864V198.668V198.471V198.274V198.077V197.879V197.681V197.482V197.283V197.083V196.883V196.683V196.482V196.281V196.079V195.877V195.675V195.472V195.269V195.065V194.861V194.657V194.452V194.247V194.041V193.835V193.629V193.422V193.215V193.008V192.8V192.592V192.384V192.175V191.966V191.757V191.547V191.337V191.127V190.917V190.706V190.494V190.283V190.071V189.859V189.646V189.434V189.221V189.008V188.794V188.58V188.366V188.152V187.937V187.722V187.507V187.292V187.076V186.86V186.644V186.428V186.211V185.995V185.778V185.561V185.343V185.125V184.908V184.69V184.471V184.253V184.034V183.815V183.596V183.377V183.158V182.938V182.719V182.499V182.279V182.058V181.838V181.618V181.397V181.176V180.955V180.734V180.513V180.292V180.07V179.849V179.627V179.405V179.183V178.961V178.739V178.517V178.295V178.072V177.85V177.627V177.405V177.182V176.959V176.736V176.513V176.29V176.067V175.844V175.621V175.398V175.175V174.951V174.728V174.505V174.281V174.058V173.835V173.611V173.388V173.164V172.941V172.718V172.494V172.271V172.047V171.824V171.601V171.377V171.154V170.931V170.707V170.484V170.261V170.038V169.815V169.592V169.369V169.146V168.923V168.7V168.478V168.255V168.033V167.81V167.588V167.366V167.143V166.921V166.699V166.477V166.256V166.034V165.813V165.591V165.37V165.149V164.928V164.707V164.486V164.265V164.045V163.825V163.605V163.385V163.165V162.945V162.726V162.506V162.287V162.068V161.85V161.631V161.413V161.194V160.976V160.759V160.541V160.324V160.107V159.89V159.673V159.457V159.24V159.024V158.809V158.593V158.378V158.163V157.948V157.734V157.519V157.305V157.092V156.878V156.665V156.452V156.24V156.027V155.815V155.603V155.392V155.181V154.97V154.76V154.549V154.34V154.13V153.921V153.712V153.503V153.295V153.087V152.88V152.673V152.466V152.259V152.053V151.847V151.642V151.437V151.232V151.028V150.824V150.621V150.418V150.215V150.013V149.811V149.609V149.408V149.207V149.007V148.807V148.608V148.409V148.21V148.012V147.814V147.617V147.42V147.224V147.028V146.833V146.638V146.443V146.249V146.056V145.862V145.67V145.478V145.286V145.095V144.904V144.714V144.525V144.335V144.147V143.959V143.771V143.584V143.397V143.211V143.026V142.841V142.657V142.473V142.289V142.107V141.924V141.743V141.562V141.381V141.201V141.022V140.843V140.665V140.487V140.31V140.134V139.958V139.783V139.608V139.434V139.261V139.088V138.916V138.744V138.573V138.403C47.907 78.7957 96.2283 30.4744 155.836 30.4744C215.443 30.4744 263.764 78.7957 263.764 138.403Z"
          stroke="#2F3945"
          stroke-width="19.9253"
        ></path>
        <path
          class="svg_lock_path"
          d="M40.5 254.192V135.411C40.5 73.6732 91.634 23.5 154.867 23.5C218.158 23.5 269.179 70.2323 270.05 135.457C270.489 168.349 270.553 191.982 270.467 207.868L267.96 198.557L265.239 188.448L261.333 198.161C253.123 218.579 238.94 230.773 220.683 237.949C202.264 245.188 179.675 247.321 154.867 247.321C137.565 247.321 107.975 249.126 82.8166 250.92C70.2145 251.818 58.6872 252.716 50.3107 253.39C46.2009 253.72 42.849 253.997 40.5 254.192Z"
          stroke="url(#pai1)"
          stroke-width="7"
          style={{
            transitionDuration: '0.0714286s',
            transitionTimingFunction: 'linear',
            strokeDasharray: `${lineFill[lockActive]}px`,
            strokeDashoffset: '100%',
            stroke: '#c26a57',
          }}
        ></path>
        <g filter="url(#fil3)">
          <path
            d="M23 198.894C23 189.038 27.8591 179.815 35.9883 174.242L38.8525 172.279C41.0639 170.763 43.6823 169.951 46.3634 169.951H269.09C272.533 169.951 275.842 171.289 278.319 173.681L278.994 174.334C284.825 179.966 288.117 187.724 288.117 195.83V333.228C288.117 340.564 282.17 346.512 274.834 346.512H36.2835C28.9473 346.512 23 340.564 23 333.228V198.894Z"
            fill="url(#pai2)"
          ></path>
        </g>
        <mask id="pa4" fill="#C26A57">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M162.923 275.103C162.923 273.335 164.081 271.797 165.694 271.073C175.041 266.881 181.551 257.494 181.551 246.587C181.551 231.773 169.542 219.765 154.729 219.765C139.915 219.765 127.906 231.773 127.906 246.587C127.906 257.494 134.416 266.88 143.761 271.072C145.375 271.796 146.532 273.334 146.532 275.102V293.183C146.532 295.43 148.353 297.252 150.6 297.252H158.855C161.102 297.252 162.923 295.43 162.923 293.183V275.103Z"
          ></path>
        </mask>
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M162.923 275.103C162.923 273.335 164.081 271.797 165.694 271.073C175.041 266.881 181.551 257.494 181.551 246.587C181.551 231.773 169.542 219.765 154.729 219.765C139.915 219.765 127.906 231.773 127.906 246.587C127.906 257.494 134.416 266.88 143.761 271.072C145.375 271.796 146.532 273.334 146.532 275.102V293.183C146.532 295.43 148.353 297.252 150.6 297.252H158.855C161.102 297.252 162.923 295.43 162.923 293.183V275.103Z"
          fill="#C26A57"
        ></path>
        <path
          d="M143.761 271.072L142.943 272.897L143.761 271.072ZM165.694 271.073L166.513 272.898L165.694 271.073ZM179.551 246.587C179.551 256.678 173.53 265.367 164.876 269.248L166.513 272.898C176.552 268.395 183.551 258.311 183.551 246.587H179.551ZM154.729 221.765C168.438 221.765 179.551 232.878 179.551 246.587H183.551C183.551 230.669 170.647 217.765 154.729 217.765V221.765ZM129.906 246.587C129.906 232.878 141.02 221.765 154.729 221.765V217.765C138.811 217.765 125.906 230.669 125.906 246.587H129.906ZM144.58 269.247C135.927 265.366 129.906 256.677 129.906 246.587H125.906C125.906 258.31 132.905 268.394 142.943 272.897L144.58 269.247ZM148.532 293.183V275.102H144.532V293.183H148.532ZM158.855 295.252H150.6V299.252H158.855V295.252ZM160.923 275.103V293.183H164.923V275.103H160.923ZM144.532 293.183C144.532 296.535 147.249 299.252 150.6 299.252V295.252C149.458 295.252 148.532 294.326 148.532 293.183H144.532ZM142.943 272.897C143.956 273.352 144.532 274.244 144.532 275.102H148.532C148.532 272.423 146.793 270.24 144.58 269.247L142.943 272.897ZM158.855 299.252C162.206 299.252 164.923 296.535 164.923 293.183H160.923C160.923 294.326 159.997 295.252 158.855 295.252V299.252ZM164.876 269.248C162.662 270.241 160.923 272.424 160.923 275.103H164.923C164.923 274.245 165.499 273.353 166.513 272.898L164.876 269.248Z"
          fill="#C26A57"
          mask="url(#pa4)"
        ></path>
        <circle cx="154.728" cy="246.587" r="16.3915" fill="black"></circle>
      </g>
      <g
        class="circl_lock"
        filter="url(#fil2)"
        style={{
          transitionDuration: '0.0714286s',
          transitionTimingFunction: 'linear',
          transform: `translate(${translate[lockActive][0]}px, ${translate[lockActive][1]}px)`,
        }}
      >
        <circle cx="268" cy="155" r="16" fill="#08BB9A"></circle>
        <circle
          cx="268"
          cy="155"
          r="11"
          stroke="#202830"
          stroke-width="10"
          fill="#C26A57"
        ></circle>
      </g>
      <defs>
        <filter
          id="fil1"
          x="0.860781"
          y="0.0747027"
          width="309.396"
          height="370.79"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          ></feColorMatrix>
          <feOffset dy="2.21392"></feOffset>
          <feGaussianBlur stdDeviation="11.0696"></feGaussianBlur>
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.4 0"
          ></feColorMatrix>
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow"
          ></feBlend>
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow"
            result="shape"
          ></feBlend>
        </filter>
        <filter
          id="fil3"
          x="17.4652"
          y="162.203"
          width="276.187"
          height="187.63"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          ></feColorMatrix>
          <feOffset dy="-2.21392"></feOffset>
          <feGaussianBlur stdDeviation="2.7674"></feGaussianBlur>
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          ></feColorMatrix>
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow"
          ></feBlend>
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow"
            result="shape"
          ></feBlend>
        </filter>
        <filter
          id="fil2"
          x="222"
          y="109"
          width="92"
          height="92"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          ></feColorMatrix>
          <feOffset></feOffset>
          <feGaussianBlur stdDeviation="15"></feGaussianBlur>
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.0352941 0 0 0 0 0.72549 0 0 0 0 0.611765 0 0 0 1 0"
          ></feColorMatrix>
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow"
          ></feBlend>
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow"
            result="shape"
          ></feBlend>
        </filter>
        <linearGradient
          id="pai1"
          x1="231.932"
          y1="258"
          x2="231.932"
          y2="20"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#3B8BD4"></stop>
          <stop offset="1" stop-color="#06BD98"></stop>
        </linearGradient>
        <linearGradient
          id="pai2"
          x1="155.559"
          y1="169.951"
          x2="155.559"
          y2="346.512"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#2F3945"></stop>
          <stop offset="1" stop-color="#262F3A"></stop>
        </linearGradient>
        <linearGradient
          id="pai3"
          x1="172.029"
          y1="297.252"
          x2="172.029"
          y2="219.765"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#3B8BD4"></stop>
          <stop offset="1" stop-color="#06BD98"></stop>
        </linearGradient>
      </defs>
    </svg>
  );
};

export default LockSvg;
