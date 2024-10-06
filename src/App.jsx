import { useState } from "react";
import "./App.css";
import { Box, Image, Text, SimpleGrid, useToast } from "@chakra-ui/react";
import backgroundImage from "./assets/FondoPantalla.jpg";
import FotoAle1 from "./assets/FotoAle1.jpg";
import FotoAle2 from "./assets/FotoAle2.png";
import FotoAle3 from "./assets/FotoAle3.jpg";
import FotoAle4 from "./assets/FotoAle4.jpg";
import FotoAle5 from "./assets/FotoAle5.jpg";
import FotoAle6 from "./assets/FotoAle6.jpg";
import CorazonIcon from "./assets/corazonIcon.png";
import MinecraftIcon from "./assets/DiamanteMinecraft.png";
import MarioIcon from "./assets/MarioEstrella.png";
import stardewValleyIcon from "./assets/stardewValleyIcon.png";
import reinaIcon from "./assets/reinaIcon.png";
import estrellaBrawlIcon from "./assets/estrellaBrawlIcon.png";
import player2Icon from "./assets/player2Icon.png";
import pastelIcon from "./assets/pastelIcon.png";
import iconoCumple from "./assets/iconoCumple.png";

const Data = [
  {
    Titulo: "Me gusta cuando estas a lo natural",
    src: FotoAle1,
    Descripcion:
      "Aunque no fue perfecto, me alegra haberte invitado a mi hogar y compartir habitación contigo. Fue una experiencia muy bonita.",
  },
  {
    Titulo: "Conoci este juego por ti",
    src: FotoAle2,
    Descripcion:
      "Eres mi compañera de partidas. Espero poder seguir compartiendo esta afición contigo y jugar muchos juegos más juntos.",
  },
  {
    Titulo: "Nuestra primera salida al cine",
    src: FotoAle3,
    Descripcion:
      "Fue una experiencia muy bonita ver la pelicula contigo. Se que es la primera de muchas salidas al cine.",
  },
  {
    Titulo: "Un dia de compras",
    src: FotoAle4,
    Descripcion:
      "Me gusto jugar contigo mientras veiamos las tiendas. en el futuro espero poder comprar todo lo que quieras.",
  },
  {
    Titulo: "me gusto vivir nuevas experiencias contigo",
    src: FotoAle5,
    Descripcion:
      "Aunque sea un poco inexperto, estoy dispuesto a aprender cosas nuevas para complacerte y hacerte feliz.",
  },
  {
    Titulo: "Me gusta esta foto te ves muy bonita",
    src: FotoAle6,
    Descripcion:
      "Aunque ya lo sabes, me gusta recordártelo cada vez que tengo oportunidad, eres una preciosidad.",
  },
];

const Juegos = [
  {
    Descripcion: "Eres el diamante de mi Minecraft, porque siempre te busco",
    imagen: MinecraftIcon,
  },
  {
    Descripcion: "Eres la estrella de mi Mario, porque contigo soy invencible",
    imagen: MarioIcon,
  },
  {
    Descripcion: "Eres el material más valioso; sin ti, no habría boda",
    imagen: stardewValleyIcon,
  },
  {
    Descripcion: "Eres la reina de mi tablero de ajedrez y de mi vida",
    imagen: reinaIcon,
  },
  {
    Descripcion:
      "Eres la estrella de mi brawl, porque detras de ti siempre hay un regalo",
    imagen: estrellaBrawlIcon,
  },
  {
    Descripcion: "Siempre serás mi player 2, porque juntos somos invencibles",
    imagen: player2Icon,
  },
];

const IconComponent = () => (
  <Image src={CorazonIcon} alt="Corazón" boxSize="20px" />
);

function App() {
  const toast = useToast();
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const positions = ["top", "top-right", "top-left", "bottom", "bottom-left"];

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
    const randomPosition =
      positions[Math.floor(Math.random() * positions.length)];
    toast({
      title: "Te amo mucho",
      description: `Eres una chica increible`,

      duration: 2000,
      isClosable: true,
      position: "top",
      icon: <IconComponent />,
      position: randomPosition,
      colorScheme: "cyan",
    });
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <>
      <Box
        textAlign="center"
        fontSize={{ base: "md", md: "lg", lg: "xl" }} // Tamaño de fuente responsivo
        height={{ base: "20vh", md: "30vh", lg: "40vh" }} // Altura responsiva
        width={{ base: "80vw", md: "70vw", lg: "60vw" }} // Ancho responsivo
        background="#08295e"
        display="flex"
        alignItems="center"
        justifyContent="center"
        color="white"
        mt="5"
        margin="0 auto"
        pt="2"
        boxShadow="md"
      >
        <Box
          textAlign="center"
          justifyContent="center"
          alignItems="center"
          display="flex"
          flexDirection="column"
        >
          <Text
            fontSize={50}
            p={4}
            borderRadius="md"
            mt={30}
            fontWeight="bold"
            fontFamily="cursive"
          >
            ¡Feliz Cumpleaños
            <br />
            Mi niña Hermosa
          </Text>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            mt={2} // Añade un margen superior para separar los iconos del texto
          >
           <Image
              width="70px"
              height="70px"
              src={iconoCumple} // Reemplaza con la ruta de tu icono izquierdo
            />
            <Image
              width="70px"
              height="70px"
              src={pastelIcon}
              mx={4} // Añade un margen horizontal para separar los iconos
            />
            <Image
              width="70px"
              height="70px"
              src={iconoCumple} 
              style={{ transform: 'scaleX(-1)' }} // Reemplaza con la ruta de tu icono derecho
            />
          </Box>
        </Box>
        <iframe
          src="https://open.spotify.com/embed/playlist/0GIZvseu1ts0K6vo0AfPZQ?utm_source=generator"
          width="320"
          height="354"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          style={{
            position: "fixed",
            bottom: "0",
            right: "0",
            margin: "10px",
            borderRadius: "10px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          }}
        ></iframe>
      </Box>
      <Box
        height={{ base: "80vh", md: "90vh", lg: "100vh" }} // Altura responsiva
        color="red.500"
        bg="gray.50"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        borderRadius="md"
        width={{ base: "90vw", md: "80vw", lg: "60vw" }} // Ancho responsivo
        margin="0 auto"
        mt={4}
        boxShadow="2xl"
        p={{ base: 4, md: 5, lg: 6 }} // Padding responsivo
      >
        <Text
          fontSize="3xl"
          color="gray.700"
          textAlign="center"
          mb={8}
          fontFamily="serif"
        >
          Sección de Fotitos
        </Text>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
          {Data.map((data, index) => (
            <Box
              key={index}
              maxW={{ base: "100%", sm: "sm" }}
              borderWidth="1px"
              borderRadius="lg"
              boxShadow="lg"
              overflow="hidden"
              bg="#ffffdd"
              p={2}
              transition="transform 0.2s"
              _hover={{ transform: "scale(1.05)", boxShadow: "2xl" }}
              _focus={{ transform: "scale(1.05)", boxShadow: "2xl" }}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <Image
                src={data.src}
                alt="Prueba"
                objectFit="contain"
                width="100%"
                height="200px"
                borderRadius="md"
              />
              <Box
                mt="2"
                fontWeight="semibold"
                as="h3"
                lineHeight="tight"
                fontFamily="serif"
                color="red.500"
                marginTop="5"
              >
                {data.Titulo}
              </Box>
              <Box color="gray.500" mt={2} fontFamily="sans-serif">
                <Text align="justify">{data.Descripcion}</Text>
              </Box>
            </Box>
          ))}
        </SimpleGrid>
      </Box>
      <Box
        height={{ base: "80vh", md: "90vh", lg: "100vh" }} // Altura responsiva
        color="red.500"
        bg="gray.100"
        display="flex"
        flexDirection="column"
        borderRadius="md"
        width={{ base: "90vw", md: "80vw", lg: "60vw" }} // Ancho responsivo
        margin="0 auto"
        mt={4}
        p={4}
      >
        <Text
          fontSize="xx-large"
          color="black"
          textAlign="center"
          mb={6}
          mt={4}
          fontFamily="serif"
        >
          Mensaje
        </Text>

        <Text
          fontSize="xl"
          color="black"
          textAlign="justify"
          mb={6}
          fontFamily="serif"
          width="50vw"
          margin="0 auto"
        >
          Hola, mi niña hermosa. Espero que te la estés pasando muy bien en tu
          día. Esto será un pequeño mensaje para ti, ya que a lo largo de estos
          años ya te he dicho muchas cosas. Pero quiero decirte que me siento
          orgulloso de haber compartido todos estos cumpleaños contigo.
          <br />
          Ya no somos tan pequeños como antes; ahora la vida nos enfrentará a
          nuevos retos y desafíos. Pero quiero que sepas que, si sigo siendo tu
          compañero de vida, contarás con mi apoyo, mi amor y mi cariño para
          todos los momentos que necesites y para todos los desafíos que quieras
          enfrentar. Intentaré ser no solo tu pareja, sino también tu mejor
          amigo, tu confidente, tu player 2 y todo lo que tú necesites.
          <br />
          Eres una persona increíble y me hace muy feliz celebrar este día tan
          especial contigo. Te doy las gracias por permitirme ser parte de tu
          vida un año más. Te amo mucho, mi niña hermosa. ¡Feliz cumpleaños!
        </Text>
        <SimpleGrid columns={3} spacing={10} mt={20}>
          {Juegos.map((juego, index) => (
            <Box
              key={index}
              maxW={{ base: "100%", sm: "sm" }}
              overflow="hidden"
              alignItems="center"
              justifyContent="center"
              display="flex"
              flexDirection="column"
              p={2}
              transition="transform 0.2s"
              _hover={{ transform: "scale(1.05)" }}
              _focus={{ transform: "scale(1.05)" }}
            >
              <Image
                src={juego.imagen}
                alt="Prueba"
                objectFit="contain"
                height="70px"
                width="70px"
              />
              <Box
                mt="2"
                fontWeight="bold"
                as="h3"
                fontFamily="serif"
                textAlign="center"
                color={"black"}
              >
                {juego.Descripcion}
              </Box>
            </Box>
          ))}
        </SimpleGrid>
      </Box>
    </>
  );
}

export default App;
