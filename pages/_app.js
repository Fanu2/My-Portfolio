import { motion } from 'framer-motion';

function MyApp({ Component, pageProps }) {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={{
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
      }}
    >
      <Component {...pageProps} />
    </motion.div>
  );
}

export default MyApp;
