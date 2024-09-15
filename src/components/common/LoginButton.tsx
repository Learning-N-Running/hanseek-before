import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { SET_USER_LOGIN } from "@/redux/slice/authSlice";
import { LongBlueButton } from "../base/LongBlueButton";
import { useRouter } from "next/navigation";
// import { useGetSigner } from "@/lib/sign/useGetSigner";
import { AlchemyProvider, ethers } from "ethers";

const LoginButton = () => {
  const dispatch = useDispatch();
  // const getSigner = useGetSigner();
  const router = useRouter();

  const onLogin = async () => {
    // admin용
    const providerAdmin = new AlchemyProvider(
      "matic-amoy",
      process.env.NEXT_PUBLIC_ALCHEMY_API_KEY
    );
    const signerAdmin = new ethers.Wallet( //contract 소유자가 직접 트랜잭션을 보내야함.
      process.env.NEXT_PUBLIC_PRIVATE_KEY!,
      providerAdmin
    );

    // dispatch(
    //   SET_USER_LOGIN({
    //     address: address,
    //     email: userInfo.email!,
    //     nickname: userInfo.name!,
    //     profileImage: userInfo.profileImage!,
    //   })
    // );
    router.push("/signup");
  };

  return <LongBlueButton onClick={onLogin}>Create Your Account</LongBlueButton>;
};

export default LoginButton;
