import { createEffect, createSignal, Show } from "solid-js";
import { Title } from "solid-start";
import Login from "~/components/Login";
import { getUserFromToken, logout } from "~/utils/auth";

interface User {
    name: string;
};

export default function Home() {
    const [user, setUser] = createSignal<User | null>(null);
    createEffect(() => {
        const user = getUserFromToken();
        console.log(user, 'user');
        setUser({ name: `Se'dyro` });
    });
    return (
        <main>
        <Title>The Ascean</Title>
        <h1>Greetings, and welcome to the Ascea.</h1>
        {/* <h3>
            Welcome one and all to the greatest spectacle this world has seen, a coliseum holding tests of triumph between the steeliest souls across the land, arriving in the beautiful fields of Licivitas to have a hand at capturing glory and renown, with the winner achieving the title
            Ascean va'Esai. Test your will against others in real-time combat utilizing a series of weapons and skills to prove you are 'worthy of the preservation of being.'
        </h3> */}
        <Show when={user()} fallback={<Login />}>
            <h2>Welcome back, {user()?.name}!</h2>
            <button onClick={() => logout()}>Logout</button>
        </Show>
        </main>
    );
}
