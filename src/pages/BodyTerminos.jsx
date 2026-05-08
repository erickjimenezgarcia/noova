import { Link } from "react-router-dom";

export default function BodyTerminos() {
    return (
        <div className="min-h-screen font-serif text-gray-900">
            <div className="max-w-4xl mx-auto px-8 py-16">

                {/* Título principal */}
                <h1 className="text-5xl font-light mb-4 leading-tight">
                    Términos de Uso de Noova SAC
                </h1>

                <p className="font-bold text-sm mb-6">
                    Última actualización: 04/04/2024
                </p>

                <p className="text-sm leading-7 mb-12 text-gray-700">
                    Bienvenido a los términos de uso de Noova SAC. Estos términos rigen su uso de nuestros servicios en línea. Al acceder y utilizar nuestros servicios, usted acepta los términos y condiciones descritos a continuación. Si no está de acuerdo con estos términos, por favor no utilice nuestros servicios.
                </p>

                {/* Sección 1 */}
                <h2 className="text-3xl font-light mb-6">1. Uso de Nuestros Servicios</h2>

                <div className="mb-8">
                    <p className="text-sm leading-7 text-gray-700 mb-4">
                        Usted acepta utilizar nuestros servicios únicamente con fines legales y de acuerdo con estos términos de uso y todas las leyes y regulaciones aplicables.
                    </p>
                    <p className="text-sm leading-7 text-gray-700 mb-4">
                        Usted acepta no utilizar nuestros servicios de manera que interfiera con la operación o la seguridad de los mismos, ni de manera que infrinja los derechos de terceros.
                    </p>
                </div>

                {/* Sección 2 */}
                <h2 className="text-3xl font-light mb-6">2. Registro de Cuenta</h2>

                <div className="mb-8">
                    <p className="text-sm leading-7 text-gray-700 mb-4">
                        Algunos de nuestros servicios pueden requerir que cree una cuenta. Usted acepta proporcionar información precisa y actualizada al registrarse y mantener la seguridad de su contraseña.
                    </p>
                    <p className="text-sm leading-7 text-gray-700 mb-4">
                        Usted es responsable de todas las actividades que ocurran bajo su cuenta y acepta notificarnos de inmediato sobre cualquier uso no autorizado de su cuenta o cualquier otra violación de seguridad.
                    </p>
                </div>

                {/* Sección 3 */}
                <h2 className="text-3xl font-light mb-6">3. Propiedad Intelectual</h2>

                <div className="mb-8">
                    <p className="text-sm leading-7 text-gray-700 mb-4">
                        Todos los derechos de propiedad intelectual sobre nuestros servicios y su contenido, incluidos textos, gráficos, logotipos, imágenes y software, son propiedad de Noova SAC o de sus licenciantes.
                    </p>
                    <p className="text-sm leading-7 text-gray-700 mb-4">
                        Usted acepta no modificar, copiar, distribuir, transmitir, exhibir, realizar, reproducir, publicar, autorizar, crear trabajos derivados, transferir o vender ningún contenido obtenido a través de nuestros servicios.
                    </p>
                </div>


                {/* Sección 4 */}
                <h2 className="text-3xl font-light mb-6">4. Limitación de Responsabilidad</h2>

                <div className="mb-8">
                    <p className="text-sm leading-7 text-gray-700 mb-4">
                        En la máxima medida permitida por la ley, Noova SAC y sus afiliados no serán responsables por ningún daño directo, indirecto, incidental, especial o consecuente que surja del uso de nuestros servicios.
                    </p>
                    <p className="text-sm leading-7 text-gray-700 mb-4">
                        Usted utiliza nuestros servicios bajo su propio riesgo. No garantizamos que los servicios sean seguros, libres de errores, ininterrumpidos o estén libres de virus u otros componentes dañinos.
                    </p>
                </div>


                {/* Sección 5 */}
                <h2 className="text-3xl font-light mb-6">5. Modificaciones y Terminación</h2>

                <div className="mb-8">
                    <p className="text-sm leading-7 text-gray-700 mb-4">
                        Nos reservamos el derecho de modificar, suspender o discontinuar cualquier aspecto de nuestros servicios en cualquier momento y sin previo aviso.
                    </p>
                    <p className="text-sm leading-7 text-gray-700 mb-4">
                        Nos reservamos el derecho de terminar su acceso a nuestros servicios en cualquier momento y por cualquier motivo, incluyendo, entre otros, la violación de estos términos de uso.
                    </p>
                </div>


                {/* Sección 6 */}
                <h2 className="text-3xl font-light mb-6">6. Enlaces a Terceros</h2>

                <div className="mb-8">
                    <p className="text-sm leading-7 text-gray-700 mb-4">
                        Nuestros servicios pueden contener enlaces a sitios web de terceros. Estos enlaces se proporcionan únicamente para su conveniencia y no implican ningún respaldo por parte de Noova SAC.
                    </p>
                    <p className="text-sm leading-7 text-gray-700 mb-4">
                        No somos responsables del contenido, la precisión o las prácticas de privacidad de estos sitios web de terceros. Le recomendamos que revise las políticas de privacidad y términos de uso de cualquier sitio web al que acceda desde nuestros servicios.
                    </p>
                </div>


                {/* Sección 7 */}
                <h2 className="text-3xl font-light mb-6">7. Ley Aplicable</h2>

                <div className="mb-8">
                    <p className="text-sm leading-7 text-gray-700">
                        Estos términos de uso se regirán e interpretarán de acuerdo con las leyes de [país/estado] sin tener en cuenta sus disposiciones sobre conflictos de leyes.
                    </p>
                </div>

                {/* Sección 8 */}
                <h2 className="text-3xl font-light mb-6">8. Cambios en los Términos de Uso</h2>

                <div className="mb-8">
                    <p className="text-sm leading-7 text-gray-700">
                        Nos reservamos el derecho de modificar estos términos de uso en cualquier momento y sin previo aviso. Cualquier cambio entrará en vigencia inmediatamente después de su publicación en nuestros servicios.
                    </p>
                </div>


                {/* Sección 9 */}
                <h2 className="text-3xl font-light mb-6">9. Contacto</h2>

                <div className="mb-8">
                    <p className="text-sm leading-7 text-gray-700">
                        Si tiene alguna pregunta, inquietud o solicitud relacionada con nuestra política de privacidad, no dude en ponerse en contacto con nosotros a través del correo electrónico{" "}
                        <Link to="/contactanos" className="text-blue-600 underline hover:text-blue-800 transition-colors duration-150">
                         info@noovasac.com
                        </Link>{" "}
                        o mediante el número de teléfono +51 944269338.
                    </p>
                </div>
            </div>
        </div>
        );
}