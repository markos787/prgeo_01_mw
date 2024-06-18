import React, { useState } from "react";
import "./About.css";

function About() {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
    console.log(toggle);
  };
  return (
    <div className="about">
      <label class="switch">
        <input type="checkbox" onClick={() => handleToggle()} />
      </label>
      <h1>O projekcie</h1>
      <div className="about_text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer a
        efficitur nibh, quis blandit arcu. Aenean consequat tempor neque, eu
        ultricies enim mollis ac. Vestibulum iaculis facilisis accumsan. Integer
        et velit id arcu maximus consectetur a sed nibh. Phasellus pellentesque
        odio lectus, nec varius orci suscipit quis. Pellentesque lobortis ornare
        tincidunt. Vestibulum nec orci pellentesque, porttitor eros eget,
        malesuada felis. Ut feugiat ultrices posuere. Curabitur aliquam, ex vel
        convallis sodales, nisl nibh scelerisque augue, vel efficitur augue sem
        nec odio. Pellentesque volutpat egestas leo non rhoncus. Proin tincidunt
        sem sem, sed rutrum purus viverra a. In in augue arcu. Vestibulum erat
        magna, congue tempor pellentesque imperdiet, facilisis sit amet diam.
        Integer eleifend orci vel malesuada bibendum. Nulla suscipit efficitur
        felis, eget faucibus lacus laoreet eget.{" "}
        <span className={toggle ? "about_text__span_a" : "about_text__span_b"}>
          Vivamus maximus
        </span>
        , odio in congue commodo, dolor turpis blandit sapien, non vestibulum
        nunc justo eu sem. Proin eu ligula ut mauris hendrerit vehicula. Nulla
        sodales, sem non consequat hendrerit, lectus augue molestie ipsum, quis
        condimentum ante quam sed nulla. Fusce at commodo nibh, egestas rhoncus
        lacus. Pellentesque habitant morbi tristique senectus et netus et
        malesuada fames ac turpis egestas. Donec auctor neque ac sagittis
        laoreet. Etiam vulputate magna in sollicitudin molestie. Nam accumsan
        malesuada nisi, non luctus arcu auctor id. Donec sollicitudin ex risus,
        eu tristique mauris volutpat ac. Donec aliquet, arcu eu blandit gravida,
        augue dui viverra sapien, et tempus odio dolor porttitor dui.
        Suspendisse fringilla ac nisi maximus varius. Maecenas non lacinia nisl.
        Duis sit amet libero orci. Fusce euismod consectetur eros a finibus.
        Vivamus ipsum augue, sodales vitae massa ut, facilisis imperdiet neque.
        Maecenas volutpat metus massa, sed vestibulum nunc tristique vel. Nulla
        venenatis ac odio sit amet sodales. Duis placerat at metus eget tempor.
        Mauris luctus leo aliquet nulla convallis, vitae semper sem convallis.
        Vestibulum volutpat leo eget tellus tempus, eu mollis ante commodo.
        Suspendisse lacinia purus et ex porttitor, nec laoreet erat dictum. In
        nisl est, volutpat non dolor sed, mattis fringilla diam. Etiam ultricies
        nisl a gravida varius. Curabitur sit amet iaculis sem. Ut dapibus
        sagittis quam vel pellentesque. Sed ac enim sed metus mollis maximus
        vestibulum ac leo. Aenean vehicula ex id arcu mattis pretium. Praesent
        sed ultricies mi. Vestibulum at neque ac metus tincidunt viverra non eu
        nisi. Pellentesque nec augue non urna sollicitudin interdum. Quisque
        auctor eleifend metus. Sed vel convallis mauris. Nunc quam metus,
        fermentum nec pellentesque sit amet, interdum vitae nulla. Nullam ipsum
        nibh, sodales nec semper quis, aliquam suscipit ante. Vivamus justo
        sapien, posuere ac dapibus at, rhoncus eget purus. Cras sit amet
        efficitur felis. Aliquam erat volutpat. Morbi vel dui hendrerit turpis
        laoreet ornare in non justo. Aenean ante massa, dapibus in est non,
        pretium porta ex. Fusce auctor dignissim urna ut iaculis. Phasellus quis
        suscipit ligula. Proin vel dolor ut nisl posuere condimentum. Sed id
        urna elementum eros lobortis fermentum eget eget velit. Duis eu
        consectetur urna, id ultrices erat. Quisque et orci nec eros efficitur
        vehicula. Pellentesque molestie erat eu varius interdum. Nam vitae mi
        volutpat erat tincidunt vehicula quis at lorem. Pellentesque habitant
        morbi tristique senectus et netus et malesuada fames ac turpis egestas.
        Suspendisse pharetra vulputate eros sed feugiat. Quisque eu pellentesque
        elit. Nunc at nisi diam. Nullam quis massa felis. Aliquam pellentesque
        luctus dapibus. Nam lacinia pulvinar ex, quis sollicitudin purus ornare
        vitae. Mauris efficitur nunc ac fermentum tincidunt. Ut id odio nunc.
        Fusce malesuada, ipsum vitae volutpat molestie, elit tellus faucibus
        arcu, vitae mollis velit augue ut ante. Curabitur erat ligula, convallis
        quis fringilla a, consequat non eros. Cras aliquet, neque ac tempus
        faucibus, leo ipsum sodales nisi, sit amet blandit odio risus eu nibh.
        Sed ac arcu consectetur, luctus mauris at, accumsan erat. Sed porttitor,
        lorem at volutpat ornare, odio neque venenatis arcu, a luctus ex purus
        eget turpis. Pellentesque magna eros, dapibus sit amet velit et, commodo
        maximus mauris. Integer sit amet neque consequat mauris porttitor
        egestas. Vivamus a pulvinar lorem. Donec id nibh commodo, accumsan ex
        blandit, dictum quam. Mauris nec augue sagittis, fringilla leo et,
        semper odio. Vivamus pulvinar finibus ligula, in iaculis ante viverra
        eu. Nulla ipsum sapien, convallis nec nibh eget, finibus hendrerit urna.
        Proin et quam ut sapien tincidunt euismod. Cras fringilla at lectus in
        accumsan. Curabitur cursus faucibus ligula id mattis. Cras augue tellus,
        facilisis a massa at, accumsan bibendum erat. Curabitur in dictum erat.
        In mattis ex non diam egestas, sit amet consectetur dui sollicitudin.
        Aliquam vel bibendum nisl. Fusce a lorem vehicula, faucibus odio a,
        mollis mauris. Cras porta, nisi quis ullamcorper pretium, ligula sem
        dapibus lacus, at iaculis arcu sem eu ante. Nam eget arcu vel ante
        hendrerit tempor posuere id libero. Curabitur et vestibulum arcu, eu
        viverra ligula. Aenean eu ornare sapien. Donec maximus viverra augue eu
        cursus. Nunc in tortor nisl. Duis pretium sem sed ante dignissim, vel
        molestie nisl vehicula. Curabitur id mollis nisl. Nullam tincidunt nulla
        et mattis consequat. Sed euismod elit et eros fringilla dapibus.
        Pellentesque cursus nisi non felis pulvinar volutpat. Curabitur egestas
        metus iaculis, accumsan est a, dapibus eros. Vivamus odio leo, euismod
        ac dolor at, sodales tempus turpis. Quisque vulputate tincidunt diam
        molestie viverra. Fusce sit amet imperdiet nisl, vel faucibus odio. Sed
        mattis risus eu arcu gravida, condimentum vestibulum magna eleifend.
        Pellentesque volutpat ligula a urna porttitor rhoncus. Sed ac orci
        interdum, porta lacus ac, imperdiet nunc. Curabitur sit amet massa ac
        turpis rhoncus malesuada. Phasellus vitae nisi a diam faucibus
        sollicitudin et sed ex. In leo metus, eleifend in tortor at, ultrices
        pulvinar justo. Vivamus pulvinar tortor et libero elementum fringilla.
        Phasellus eu sapien maximus, vestibulum dolor eu, sagittis enim. Ut
        luctus felis eu accumsan tempus. Aliquam a arcu in purus consectetur
        ullamcorper. Sed a laoreet risus. Morbi laoreet nulla non dui laoreet
        aliquam.
      </div>
    </div>
  );
}

export default About;
