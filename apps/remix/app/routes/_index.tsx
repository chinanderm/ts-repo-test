import { foo } from '@local/foo'
import { bar } from '@local/bar'

export default function IndexPage() {
    return (
        <div>
            <h1>Index Page</h1>
            <p>
                Welcome to the index page!
            </p>
            <p>
                {foo()}{bar()}
            </p>
        </div>
    );
}