import { Button } from "@/components/ui/button"
import { useEffect, useRef, useState } from "react";
import { motion, useInView } from 'framer-motion';
import { Progress } from "@/components/ui/progress"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowDownToLine, BookUser, Bot, Brain, BrainCircuit, Brush, CalendarDays, CheckCircle2, Database, Dices, Fingerprint, Folder, Gift, HelpCircle, Linkedin, Mail, Search, Server, Ticket, TicketCheck, Timer } from "lucide-react";
import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog";
import Lottie from 'lottie-react';
import domicilio from '../../public/animations/domicilio.json';
// import neg1 from "../../public/neg1.jpg"
// import neg2 from "../../public/neg2.jpg"
// import neg3 from "../../public/neg3.png"
// import neg4 from "../../public/neg4.png"
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { tiendas } from "@/DB";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
    FacebookIcon,
    FacebookShareButton,
    WhatsappIcon,
    WhatsappShareButton,
} from "react-share";
import { Separator } from "@/components/ui/separator";

const Inicio = () => {

    const [cedula, setCedula] = useState("")
    const [actaLoading, setActaLoading] = useState(false)
    const [acta, setActa] = useState([])

    const consultarActas = () => {
        setActaLoading(true)
        axios.get("https://37latuqm766patrerdf5rvdhqe0wgrug.lambda-url.us-east-1.on.aws/?cedula=V" + cedula + "&recaptcha=03AFcWeA5MyVu-lhI0QkvPODr2kFIeOGlfdt_AAHuN-YPa9vg2K1oC_vte_aRnukfnX1oNN3OuYQeCUOnn5eAKa3OwRsIeA8Wb-cRIJbGkRAddHQYSixinCkFeX3kWF5idn-6Rt6zp261CiEY9nh5Kkn3mylCuaZM-MJLuC6kiK8VJag2z8hoMbOS1xhN0IQLzaI7mjj1cfaJsXXpsJD0hGB8IOqzGgSj5lZK_TYjVTq86u7yQoOmzpoGRcYohlOJOJKZ4C3OW_TWRqhdNmx3d9nVsveiT2VvVfgFAD8HorrnZt8mHQ4FVsCola46dUj5iJksuZj93jBs_NByqiEM2oHoLAdYXH6ko24CELvvL7vJo2w0mnh2s7RrKp9BTwzuTvooolpeXLwqUTshRLESUsCdlgcXtQSxB2Q5Ad-o2kJ8vn5tbZPlZNYdQFjuo0GlISrhIuXjNyZA9TWn8mQo0l9YkVo3UWfMnsD35dtsxMvjhP6UCSl9O0Vz5p0cTqqOcZ0pKuANSTp9QsajQiOfzBeioM-2E7i5QN1kmQqXOYEdQ7fZo2teqgs9p4i96N4sQkwZuege_wQkhrB7YySDbH0PzFL22Fg01UEx4-dql1C5eO9GLx8wEqtneON5sGaujIIIfp9r6aKQly1bBMUv7EUMmxm9GYf5OtaH0q0M-tuAwNVDvetmF5mPyxhVTyBuV1Zj1C8Shf5N5_7WUc4WXRgFjDTvlI2xXzs2mRW0sFlLSuj2JiRrbfMRwPqk_v0NlW72ZP5HeYDX83ytqXCUo0FSzrh232xGnBWDWfsogjUbQG9Am8gxS7GkhCld5AnEpvK8k5bUGICq8akEqZTyJdYrORUYgwaFSdQ")
            .then(({ data }) => { setActa(data.url); setActaLoading(false) }, () => setActaLoading(false))
    }

    return (
        <>
            <div className="mx-4 sm:mx-20 lg:mx-56 my-10">
                <p>Comparte el link de la página</p>
                <div className="flex gap-4 mb-10 mt-1">
                    <FacebookShareButton
                        url={"https://ganovzla.vercel.app"}
                        title="Consulta las actas donde votaste AQUI"
                        windowWidth={660}
                        windowHeight={460}
                        className="Demo__some-network__share-button"
                    >
                        <FacebookIcon size={40} round />
                    </FacebookShareButton>
                    <WhatsappShareButton
                        url={"https://ganovzla.vercel.app"}
                        title="Consulta las actas donde votaste AQUI"
                        windowWidth={660}
                        windowHeight={460}
                        className="Demo__some-network__share-button"
                    >
                        <WhatsappIcon size={40} round />
                    </WhatsappShareButton>
                </div>
                <p className="text-lg">Consultar Acta CNE por cédula</p>
                <Separator className="mb-4"/>
                <Label>Cédula</Label>
                <div className="flex items-center">
                    {/* <p>V-</p> */}
                    <Input onChange={(e) => setCedula(e.target.value)} placeholder="12345678" />
                </div>
                <Button className="mt-2 w-full" onClick={consultarActas}>Consultar</Button>
                {!actaLoading ? 
                (acta.length > 0 && <div className="flex flex-col items-center justify-center mt-2">
                <p className="text-lg mt-10">Compartir acta</p>
                <Separator className="mb-0"/>
                    <div className="flex gap-4 mb-6 mt-2">
                    <FacebookShareButton
                        url={acta}
                        title="ACTA DE MI CENTRO DE VOTACIÓN"
                        windowWidth={660}
                        windowHeight={460}
                        className="Demo__some-network__share-button"
                    >
                        <FacebookIcon size={40} round />
                    </FacebookShareButton>
                    <WhatsappShareButton
                        url={acta}
                        title="ACTA DE MI CENTRO DE VOTACIÓN"
                        windowWidth={660}
                        windowHeight={460}
                        className="Demo__some-network__share-button"
                    >
                        <WhatsappIcon size={40} round />
                    </WhatsappShareButton>
                    </div>
                    <img src={acta} />
                </div>) :
                    <div role="status" className="flex items-center justify-center mt-10">
                        <svg aria-hidden="true" class="w-16 h-16 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                        </svg>
                    </div>}
            </div>
        </>
    )
}

export default Inicio