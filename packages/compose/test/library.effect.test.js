import { library, session, SessionComposer } from '../';

describe('library.effect', function () {

  it('creates an effect', async function () {
    const composer = await library('test', async function ({ library }) {
      library.effect('reverb', async function () {
        return 'i am reverb';
      });
    });

    expect(composer.model.effects.length).toEqual(1);
    expect(composer.model.effects.first().name).toEqual('reverb');
  });

  it('exposes itself to other sessions', async function () {

    // Create a library
    const libraryComposer = await library('test', async function ({ library }) {
      library.effect('reverb', async function () {
        return 'i am reverb';
      });
    });

    // Expose library to session composer
    SessionComposer.use(libraryComposer.model);

    // Create a session that uses something from the library
    const sessionComposer = await session('test', async function ({ session }) {
      session.import.effect('reverb').from.library('test');
    });

    expect(sessionComposer.model.effects.length).toEqual(1);
    expect(sessionComposer.model.effects.first().name).toEqual('reverb');

  });
});