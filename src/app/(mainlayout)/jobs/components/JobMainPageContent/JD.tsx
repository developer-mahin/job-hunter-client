import styles from "./styles.module.css";

type TProps = {
  description: string | TrustedHTML | undefined;
};

const JD = ({ description }: TProps) => {
  return (
    <div className="mt-6">
      <p className="text-2xl font-semibold">About the job</p>
      <div
        className={styles.qleditor}
        dangerouslySetInnerHTML={{
          __html: description || "",
        }}
      />
    </div>
  );
};

export default JD;
