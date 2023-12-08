import { Component, Show, createEffect, createSignal } from "solid-js"
import { login, signup } from "../utils/auth";
import { NavLink, useNavigate } from "@solidjs/router";

const Login: Component<{}> = () => {
    const navigate = useNavigate();
    const [username, setUsername] = createSignal("");
    const [email, setEmail] = createSignal("");
    const [password, setPassword] = createSignal("");
    const [showPassword, setShowPassword] = createSignal(false);
    const [showSignup, setShowSignup] = createSignal(false);

    return (
        <div>
        <button class='std-button' onClick={() => setShowSignup(!showSignup())}>{showSignup() ? "Do You Need To Login?" : "Do You Need To Signup?"}</button><br />
        <Show when={showSignup()} fallback={<>
            <label class='std-label' for="username">{username() ? '' : 'Username'}</label>
            <input class='std-input' type="text" id="username" name="username" value={username()} oninput={(e) => setUsername(e.currentTarget.value)} /><br />
            <label class='std-label' for="password">{password() ? '' : 'Password'}</label>
            <input class='std-input' type={showPassword() ? "text" : "password"} id="password" name="password" value={password()} oninput={(e) => setPassword(e.currentTarget.value)} /><br />
            <button class='std-button' type="button" onclick={() => setShowPassword(!showPassword())}>{showPassword() ? "Hide" : "Show"} Password</button><br />
            <button class='std-button' onClick={() => login({ username, password })}>Login</button>
        </>}>
            <>
                <label class='std-label' for="username">{username() ? '' : 'Username'}</label>
                <input class='std-input' type="text" id="username" name="username" value={username()} oninput={(e) => setUsername(e.currentTarget.value)} /><br />
                <label class='std-label' for="password">{password() ? '' : 'Password'}</label>
                <input class='std-input' type={showPassword() ? "text" : "password"} id="password" name="password" value={password()} oninput={(e) => setPassword(e.currentTarget.value)} /><br />
                <button class='std-button' type="button" onclick={() => setShowPassword(!showPassword())}>{showPassword() ? "Hide" : "Show"} Password</button><br />
                <button class='std-button' onClick={() => signup({ username, password })}>Signup</button>
            </>
        </Show>
        </div>
    );
};

export default Login;