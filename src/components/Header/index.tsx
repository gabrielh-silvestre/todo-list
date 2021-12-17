import { ContentContainer, HeaderContainer, Anchor } from './styles';

export function Header() {
  return (
    <HeaderContainer>
      <ContentContainer>
        <h1>Todo-List</h1>

        <nav>
          <Anchor
            href="https://github.com/gabrielh-silvestre"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </Anchor>
          <Anchor
            href="https://www.linkedin.com/in/gabrielh-silvestre/"
            target="_blank"
            rel="noopenetr noreferrer"
          >
            Linkedin
          </Anchor>
        </nav>
      </ContentContainer>
    </HeaderContainer>
  );
}
