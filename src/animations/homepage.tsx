export const MobilenavVariants = {
  initial: {
    opacity: 0,
  },
  final: {
    opacity: 1,
    transition: {
      duration: 0.3,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.3,
    },
  },
};

export const slidevariants = {
  initial: {
    x: "100vw",
  },
  final: {
    x: 0,
    transition: {
      duration: 0.6,
    },
  },
  exit: {
    x: "100vw",
    transition: {
      duration: 0.6,
    },
  },
};

export const h1Variants = {
  initial : {
    x : 10,
    opacity : 0.3
  },
  final : {
    x : 0,
    opacity: 1,
    transition :{
      duration: 1,
    }
  }
}
export const secH1Variants = {
  initial : {
    x : -10,
    opacity : 0.3
  },
  final : {
    x : 0,
    opacity: 1,
    transition :{
      duration: 1,
    }
  }
}
export const heroPVariants = {
  initial : {
    y : 40,
    opacity : 0
  },
  final : {
    y : 0,
    opacity: 1,
    transition :{
      duration: 1,
    }
  }
}
export const houseVariants = {
  initial: {
    opacity: 0.3,
    scale: 0.9,
  },
  final: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1,
    },
  },
};